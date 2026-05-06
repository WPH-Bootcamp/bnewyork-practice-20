import { useForm } from "react-hook-form";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

type FormValues = {
  email: string;
  password: string;
};

export default function RHFErrors() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  function onValid(data: FormValues) {
    alert("lolos validasi:\n" + JSON.stringify(data, null, 2));
  }

  return (
    <form onSubmit={handleSubmit(onValid)} className="space-y-4 max-w-sm">
      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="err-name">Email</Label>
        <Input
          id="rhf-name"
          {...register("email", {
            required: "Email wajib diisi",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Format email ga valid",
            },
          })}
          placeholder="your@gmail.com"
        />
        {errors.email && (
          <p className="text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      {/* email */}
      <div className="space-y-2">
        <Label htmlFor="rhf-password">Password</Label>
        <Input
          id="rhf-password"
          type="password"
          {...register("password", {
            required: "Password wajib diisi",
            minLength: {
              value: 8,
              message: "Password minimal 8 karakter",
            },
          })}
          placeholder="minimal 8 karakter"
        />

        {errors.password && (
          <p className="text-sm text-red-400">{errors.password.message}</p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
