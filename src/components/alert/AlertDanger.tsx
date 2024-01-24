"use client"
import React from 'react';
import useStore from '@/store/useStore';

interface AlertDangerProps {
    setAlertAllDelete: React.Dispatch<React.SetStateAction<boolean>>;
    AlertAllDelete: boolean;
}

const AlertDanger: React.FC<AlertDangerProps> = ({ setAlertAllDelete, AlertAllDelete }) => {
    const { deleteAllTasks } = useStore();

    return (
        <div className="rounded-md max-w-sm mx-auto bg-red-50 p-4">
            <div className="flex justify-center">
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Delete All Tasks</h3>
                    <div className="mt-2 text-sm text-red-700">
                        <p>Are you sure you want to delete all tasks?</p>
                    </div>
                    <div className="mt-4">
                        <div className="-mx-2 -my-1.5 flex">
                            <button
                                onClick={() => {
                                    deleteAllTasks()
                                    setAlertAllDelete(false)
                                }}
                                type="button"
                                className="rounded-md bg-red-50 px-2 py-1.5 text-sm font-medium text-red-800 hover:bg-red-100 focus:outline-none transition-all ease-in focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
                            >
                                Yes, Delete All
                            </button>
                            <button
                                type="button"
                                className="ml-3 rounded-md bg-red-50 px-2 py-1.5 text-sm font-medium text-red-800 hover:bg-red-100 focus:outline-none transition-all ease-in focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
                            >
                                Dismiss
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlertDanger;
