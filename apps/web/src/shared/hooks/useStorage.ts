'use client';

import { redirect } from 'next/navigation';
import { type User, userSchema } from '../schemas/user-schema';

const LS_USER_KEY = 'USER' as const;

export function useStorage() {
  const setUser = (data: User) => {
    localStorage.setItem(LS_USER_KEY, JSON.stringify(data));
  };

  const getUser = () => {
    const lsData = JSON.parse(localStorage.getItem(LS_USER_KEY) ?? '');

    const validated = userSchema.safeParse(lsData);

    if (!validated.success) {
      redirect('/');
    }

    return validated.data;
  };

  return { setUser, getUser };
}
