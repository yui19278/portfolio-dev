import React, { useState, useEffect } from 'react';
import './AccessCounter.css';

const API_BASE_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:9000';

interface Props {
    variant?: 'default' | 'inline' | 'badge';
      text?: (count: number) => React.ReactNode;
}

const defaultText = (count: number) => (
    <p>
        あなたは <strong>{count.toLocaleString()}</strong> 人目の訪問者です
    </p>
);

export default function AccessCounter({ variant = 'default', text }: Props) {
    const [count, setCount] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCount = async () => {
            if (import.meta.env.DEV) {
                setCount(12345);
                return;
            }
            try {
                const response = await fetch(`${API_BASE_URL}/api/counter/increment`, { method: 'POST' });
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setCount(data.count);
            } catch (e) {
                console.error('Failed to fetch access count:', e);
                setError('Error');
            }
        };
        fetchCount();
    }, []);

    const renderText = text || defaultText;

    return (
        <div className={`access-counter-wrapper ${variant}`}>
            {error && <p className="error-message">{error}</p>}
            {count !== null && renderText(count)}
        </div>
    );
}