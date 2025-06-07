import React from "react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";

const equipmentTypes = [
  { value: "laptop", label: "Ordinateur portable" },
  { value: "desktop", label: "Ordinateur fixe" },
  { value: "server", label: "Serveur" },
  { value: "printer", label: "Imprimante" },
  { value: "network", label: "Équipement réseau" },
];

const statusOptions = [
  { value: "active", label: "Actif" },
  { value: "maintenance", label: "En maintenance" },
  { value: "retired", label: "Retiré" },
];

const EquipmentForm = ({ defaultValues, onSubmit, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Nom de l'équipement*"
          {...register("name", { required: "Ce champ est obligatoire" })}
          error={errors.name?.message}
        />

        <Select
          label="Type d'équipement*"
          name="type"
          options={equipmentTypes}
          control={control}
          rules={{ required: "Ce champ est obligatoire" }}
          error={errors.type?.message}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          label="Modèle"
          {...register("model")}
        />

        <Input
          label="Numéro de série"
          {...register("serialNumber")}
        />

        <Input
          label="Numéro d'inventaire"
          {...register("inventoryNumber")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Date d'acquisition"
          type="date"
          {...register("purchaseDate")}
        />

        <Select
          label="Statut"
          name="status"
          options={statusOptions}
          control={control}
        />
      </div>

      <Input
        label="Notes"
        {...register("notes")}
        as="textarea"
        rows={3}
        className="mt-4"
      />

      <div className="flex justify-end space-x-3 pt-4">
        <Button type="button" variant="secondary">
          Annuler
        </Button>
        <Button type="submit" loading={loading}>
          {defaultValues ? "Mettre à jour" : "Ajouter l'équipement"}
        </Button>
      </div>
    </form>
  );
};

export default EquipmentForm;