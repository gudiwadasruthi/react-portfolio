import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoSrc, title }) => {
  if (!isOpen) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-[#0a0a1a]/80 p-2 text-left align-middle shadow-xl transition-all border border-white/10">
                <div className="flex justify-between items-center px-4 pt-2 pb-2">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-white/90">
                        {title}
                    </Dialog.Title>
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-white/5 p-2 text-sm font-medium text-white/70 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={onClose}
                    >
                        <X size={20} />
                    </button>
                </div>
                <div className="mt-2 bg-black rounded-lg">
                  <video
                    className="h-full w-full rounded-lg"
                    src={videoSrc}
                    controls
                    autoPlay
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default VideoModal; 