import { useState, useEffect } from 'react';
import equipmentService from '../services/equipmentService';

const useInventory = () => {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const data = await equipmentService.getAll();
        setEquipment(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEquipment();
  }, []);

  const addEquipment = async (newEquipment) => {
    const created = await equipmentService.create(newEquipment);
    setEquipment([...equipment, created]);
  };

  const updateEquipment = async (id, updatedData) => {
    const updated = await equipmentService.update(id, updatedData);
    setEquipment(equipment.map(item => item.id === id ? updated : item));
  };

  const deleteEquipment = (id) => {
    equipmentService.delete(id)
      .then(() => {
        setEquipment(equipment.filter(item => item.id !== id));
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return {
    equipment,
    loading,
    error,
    addEquipment,
    updateEquipment,
    deleteEquipment,
  };
};

export default useInventory;