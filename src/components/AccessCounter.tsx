import React, { useState, useEffect } from 'react';

const API_BASE_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:9000';

interface Props {
    text?: (count: number) => React.ReactNode;
}

const defaultText = (count: number) => (
    <p className="text-lg text-gray-700 dark:text-gray-300 border-b-2 border-gray-300 dark:border-gray-600 pb-2 inline-block">
        あなたは <strong className="font-bold text-xl mx-1">{count.toLocaleString()}</strong> 人目の訪問者です
    </p>
);

export default function AccessCounter({ text }: Props) {
    const [count, setCount] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCount = async () => {
            // dev表示用
            if (import.meta.env.DEV) {
                setTimeout(() => setCount(12345), 1000);
                return;
            }
            try {
                const response = await fetch(`${API_BASE_URL}/api/counter/increment`, { method: 'POST' });
                const data = await response.json();
                setCount(data.count);
            } catch (e) {
                console.error('Failed to fetch access count:', e);
            }
        };
        fetchCount();
    }, []);

    const renderText = text || defaultText;

    return (
        <div className="text-center">
            {error && <p className="text-red-500 font-semibold">{error}</p>}
            {count !== null && !error && renderText(count)}
            {count === null && !error && (
                <div className="animate-pulse flex justify-center items-center h-9">
                    <div className="bg-gray-300 dark:bg-gray-600 rounded-md w-64 h-7"></div>
                </div>
            )}
        </div>
    );
}
