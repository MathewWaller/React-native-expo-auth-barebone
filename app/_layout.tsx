import { Slot } from 'expo-router';
import { SessionProvider } from "@/context/AuthProvider";

export default function RootLayout() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
