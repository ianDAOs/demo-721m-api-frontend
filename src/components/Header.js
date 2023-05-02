import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Retail', to: '/' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="mx-auto bg-black">

            <nav className="mx-auto flex items-center justify-between p-8 px-12" aria-label="Global">

                <div className="flex">

                    <div className="hidden sm:flex gap-x-16">
                        {navigation.map((item) => (
                            <Link key={item.name} to={item.to} className="text-sm font-extralight text-gray-400 hover:text-white">
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex sm:hidden">
                        <button
                            type="button"
                            className="-m-3 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                </div>

                <div className="hidden sm:flex">
                    <Link to="/about" className="text-sm font-extralight leading-6 text-gray-400 hover:text-white">
                        Learn More
                    </Link>
                </div>

            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-3 right-0 z-10 w-full overflow-y-auto bg-black px-10 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-start">

                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-1.5 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-extralight leading-7 text-gray-200 hover:bg-gray-50 hover:text-black"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link
                                    to="/about"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-extralight leading-7 text-gray-400 hover:bg-gray-50 hover:text-black"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>

        </header >
    )
}
