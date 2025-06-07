// src/pages/Inventory/AddEquipment.jsx
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/ui/Button";

export default function AddEquipment() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Équipement ajouté:", data);
    // Ici: appel API vers votre backend
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Ajouter un Équipement</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Nom</label>
          <input
            {...register("name", { required: "Champ obligatoire" })}
            className="w-full p-2 border rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Type</label>
          <select
            {...register("type", { required: true })}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Sélectionnez...</option>
            <option value="ordinateur">Ordinateur</option>
            <option value="serveur">Serveur</option>
            <option value="imprimante">Imprimante</option>
          </select>
        </div>

        <Button type="submit" variant="primary">
          Enregistrer
        </Button>
      </form>
    </div>
  );
}