'use client';
import React from 'react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useSpareStore } from '@/stores/useSpareStore';
import OrderForm from './OrderForm';
import { X } from 'lucide-react';

const OrderDialog = () => {
  const { open, setOpen, spare } = useSpareStore();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-[#201d0d] px-0 text-left">
        <DialogHeader>
          <DialogTitle className="text-center text-white">
            {spare?.title}
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        {spare && <OrderForm spare={spare} close={() => setOpen(false)} />}
        <DialogClose asChild>
          <button className="absolute right-4 top-4 z-50 rounded-sm text-yellow-500 opacity-80 transition-opacity hover:text-yellow-400 hover:opacity-100 focus:outline-none focus:ring-1 focus:ring-yellow-500">
            <X className="h-4 w-4" />
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
