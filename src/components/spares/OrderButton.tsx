'use client';
import React from 'react';
import { useSpareStore } from '@/stores/useSpareStore';

const OrderButton = ({
  spare,
  text,
}: {
  spare: { id: string; title: string };
  text: string;
}) => {
  const { setSpare, setOpen } = useSpareStore();
  const onClick = () => {
    setSpare(spare);
    setOpen(true);
  };
  return (
    <button
      onClick={onClick}
      className="block w-full rounded-3xl bg-[#5f5c65] px-4 py-2 text-center text-white"
    >
      {text}
    </button>
  );
};

export default OrderButton;
