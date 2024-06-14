'use client';

import { useFormStatus } from 'react-dom';

export default function MealShareSubmit() {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} type="submit">
            {pending ? 'Submitting ...' : 'Submit'}
        </button>
    );
}
