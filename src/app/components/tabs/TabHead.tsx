"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { classNamesFn } from "@/app/functions/classNamesFn";

interface Tab {
    name: string;
    href: string;
    count?: string;
    current: string;
}

const tabs: Tab[] = [
    { name: 'All', href: '?tab=all', count: '52', current: "all" },
    { name: 'Completed!', href: '?tab=completed', count: '6', current: "completed" },
    { name: 'Active', href: '?tab=active', count: '4', current: "active" },
];



export default function TabHead() {
    const searchParams = useSearchParams()
    const isActiveTab = searchParams.get("tab") || "all"

    return (
        <div className="flex justify-center py-6">
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    defaultValue={tabs.find((tab) => tab.current)!.name}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.name}
                                href={tab.href}
                                className={classNamesFn(
                                    tab.current === isActiveTab
                                        ? 'border-sky-500 text-sky-600'
                                        : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700',
                                    'flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                                )}
                            >
                                {tab.name}
                                {tab.count ? (
                                    <span
                                        className={classNamesFn(
                                            tab.current === isActiveTab ? 'bg-sky-100 text-sky-600' : 'bg-gray-100 text-gray-900',
                                            'ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block'
                                        )}
                                    >
                                        {tab.count}
                                    </span>
                                ) : null}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
