import useFetch from "../../hooks/useFetch";
import EquipmentCard from "../../components/sections/EquipmentCard";

export default function Inventory() {
  const { data: equipments, loading, error } = useFetch("/equipments");

  if (loading) return <div className="p-8 text-center">Chargement...</div>;
  if (error) return <div className="p-8 text-red-500">Erreur : {error.message}</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Inventaire du Parc</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {equipments.map((equip) => (
          <EquipmentCard key={equip.id} equipment={equip} />
        ))}
      </div>
    </div>
  );
}