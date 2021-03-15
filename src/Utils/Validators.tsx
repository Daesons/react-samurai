import React from "react";


export const required = (value: any) => {
    if (value) {
        return undefined
    }
    return 'TEXT IS REQUIRED'
}

export const maxLength = (length: number) => (value: { length: number }) => {
    if (value) {
        return value.length > length ? `Must be ${length} characters or less` : undefined
    }
}