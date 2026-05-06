import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

export default function WhyForms() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [submitted, setSubmitted] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    let valid = true;
    if (!email.includes("@")) {
      setEmailError("Email harus mengandung @");
      valid = false;
    }

    if (password.length < 6) {
      setPasswordError("Password minimal 6 karakter");
      valid = false;
    }

    if (!valid) return;

    setSubmitted(`Submit ok -> ${email}`);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
      {/* email */}
      <div className="space-y-2">
        <Label htmlFor="email-manual">Email</Label>
        <Input
          id="email-manual"
          type="email"
          placeholder="youremail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="text-sm text-red-400">{emailError}</p>}
      </div>

      {/* password */}
      <div className="space-y-2">
        <Label htmlFor="password-manual">Password</Label>
        <Input
          id="password-manual"
          type="password"
          value={password}
          placeholder="your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <p className="text-sm text-red-400">{passwordError}</p>
        )}
      </div>

      {/* button */}
      <Button type="submit">Submit</Button>
      {submitted && <p className="text-sm text-green-400">{submitted}</p>}
    </form>
  );
}
