'use client';

import { ProportionsIcon } from 'lucide-react';
import {ThemeProvider as NextThemesProvider} from 
'next-themes'

export function ThemeProvider({children,...Props}) {
  return <NextThemesProvider {...Props}>{children}</NextThemesProvider>
}