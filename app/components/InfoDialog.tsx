'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface InfoDialogProps {
  isOpen: boolean;
  closeDialog: () => void;
  title: string;
  contentID: string;
  contentEN: string;
}

export default function InfoDialog({ isOpen, closeDialog, title, contentID, contentEN }: InfoDialogProps) {
  const { language } = useLanguage();

  const content = language === 'ID' ? contentID : contentEN;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeDialog}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-gray-900 mb-6"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-4 text-gray-600 text-base leading-relaxed">
                  {content}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 