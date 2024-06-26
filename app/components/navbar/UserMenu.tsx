'use client';
import { useCallback, useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !isOpen);
  }, [setIsOpen, isOpen]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Your Home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-4 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <IoMdMenu size={18} />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounede-xl shadow-md w-[40vw] md:w-3/4 bg-white iverflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <MenuItem onClick={() => {}} label="Login" />
            <MenuItem onClick={registerModal.onOpen} label="Sign up" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
