"use client"
import { classNamesFn } from "@/functions/classNamesFn";
import exp from "constants";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Tab {
    name: string;
    href: string;
    count?: number;
    current: string;
}

interface TabHeadProps {
    isActiveTab: string;
    tabs: Tab[];
}

const TabHead: React.FC<TabHeadProps> = ({ isActiveTab, tabs }) => {
    // Render the component
    return (
        <div className="flex justify-center py-6">
            <div className="block">
                <div className="border-b border-gray-200">
                    <div className="-mb-px flex space-x-4 sm:space-x-8" >
                        {tabs?.map((tab) => (
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
                                <span>{tab.name}</span>
                                {tab?.count ? (
                                    <span
                                        className={classNamesFn(
                                            tab.current === isActiveTab ? 'bg-sky-100 text-sky-600' : 'bg-gray-100 text-gray-900',
                                            'ml-3 rounded-full py-0.5 px-1 sm:px-2.5 text-xs font-medium md:inline-block'
                                        )}
                                    >
                                        {tab?.count}
                                    </span>
                                ) : <span
                                    className={classNamesFn(
                                        tab.current === isActiveTab ? 'bg-sky-100 text-sky-600' : 'bg-gray-100 text-gray-900',
                                        'ml-3 rounded-full py-0.5 px-1 sm:px-2.5 text-xs font-medium md:inline-block'
                                    )}
                                >
                                    {tab?.count}
                                </span>}
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default TabHead;
