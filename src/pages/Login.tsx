
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLanguage } from "../contexts/LanguageContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check demo credentials
    if (email === "demo@example.com" && password === "demo123") {
      toast.success("Login berhasil! Selamat datang di akun demo.");
      navigate("/dashboard");
    } else {
      toast.error("Email atau password salah. Gunakan akun demo: demo@example.com / demo123");
    }
  };

  const handleDemoLogin = () => {
    setEmail("demo@example.com");
    setPassword("demo123");
    toast.info("Kredensial demo telah diisi. Klik Login untuk masuk.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">{t('login')}</CardTitle>
          <CardDescription>
            Masukkan email Anda di bawah untuk login ke akun Anda.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">{t('email')}</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="m@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">{t('password')}</Label>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="language">{t('language')}</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger id="language">
                  <SelectValue placeholder="Pilih bahasa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="id">Indonesian</SelectItem>
                  <SelectItem value="zh">Chinese</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              {t('login')}
            </Button>
            <Button type="button" variant="outline" className="w-full" onClick={handleDemoLogin}>
              Gunakan Akun Demo
            </Button>
            <div className="text-sm text-center text-muted-foreground">
              <p>Akun Demo:</p>
              <p>Email: <strong>demo@example.com</strong></p>
              <p>Password: <strong>demo123</strong></p>
              <p className="mt-2">
                Belum punya akun?{" "}
                <Link to="/register" className="text-primary hover:underline">
                  Daftar di sini
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
