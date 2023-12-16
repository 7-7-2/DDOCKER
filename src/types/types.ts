import { TouchEventHandler } from 'react';
import { SetterOrUpdater } from 'recoil';
import { TouchEventHandler } from 'react';

export interface LazyRouteType {
  index: boolean;
  path: string;
}
export interface HeaderType {
  logo?: boolean;
  text?: string;
  icon?: string;
}

export interface AuthTypes {
  initialized: boolean;
  user: User;
  signIn: boolean;
}

export interface User {
  userId: string | undefined;
  email: string | null;
  name: string | null;
  profileUrl?: string;
  nickname?: string;
  brand?: string;
  gender?: string;
}

export interface SimplifyUser {
    userId: string | undefined;
    NickName: string | undefined;
    caffeine?: number;
}

export interface FollowCountProps {
    icons: {
      number?: number;
      label: string;
      onTouchEnd?: (event: TouchEventHandler<HTMLDivElement>) => void;
    }[];
  }
  
export interface LabelProps {
  label: string | undefined;
  message?: string | undefined;
  inputValue?: string | undefined;
  isAlert?: boolean | undefined;
}

export interface InputProps {
  type: string;
  handleEvent?: () => void;
  setInputValue: SetterOrUpdater<string>;
  setIsAlert?: SetterOrUpdater<boolean>;
  inputValue: string | undefined;
}

export interface BrnadItemProps {
  brand: string;
  icon: string;
}

export interface ButtonProps {
  value?: string;
  text: string;
  onTouchEnd: TouchEventHandler<HTMLButtonElement>;
  className: string;
}

export interface EmptyUserProps {
  label: string;
  onTouchEnd?: () => void;
}