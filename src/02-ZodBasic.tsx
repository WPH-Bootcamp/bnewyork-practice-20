import { useState } from "react";
import { z } from "zod";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

const userSchema = z.object({
  email: z.string().email("Email-nya ga valid"),
  age: z
    .number({ invalid_type_error: "Age harus angka" })
    .min(17, "Minimal 17 tahun"),
  username: z
    .string()
    .min(3, "Username minimal 3 huruf")
    .max(10, "melebihi karakter"),
});

type User = z.infer<typeof userSchema>;

export default function ZodBasic() {
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");

  const result = userSchema.safeParse({
    email,
    age: age === "" ? undefined : Number(age),
    username,
  });

  return (
    <div className="space-y-4 max-w-md">
      {/* email */}
      <div className="space-y-2">
        <Label htmlFor="zod-email">Email</Label>
        <Input
          id="zod-email"
          type="email"
          placeholder="contoh@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* age */}

      <div className="space-y-2">
        <Label htmlFor="zod-age">Age</Label>
        <Input
          id="zod-age"
          type="number"
          placeholder="your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      {/* username */}
      <div className="space-y-2">
        <Label htmlFor="zod-username">Username</Label>
        <Input
          id="zod-username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="rounded-md border border-slate-700 bg-slate-800 p-4 text-sm">
        {result.success ? (
          <div className="space-y-1">
            <p className="text-green-400 font-semibold">Valid</p>
            <pre className="text-slate-300">
              {JSON.stringify(result.data satisfies User, null, 2)}
            </pre>
          </div>
        ) : (
          <div className="space-y-1">
            <p className="text-red-400 font-semibold">Tidak valid</p>

            <ul className="list-disc list-inside text-red-600">
              {result.error.issues.map((issue, idx) => (
                <li key={idx}>
                  <span className="text-red-200 font-mono">
                    {issue.path.join(".") || "root"}
                  </span>{" "}
                  : {issue.message}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
