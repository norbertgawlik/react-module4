import { ComponentPropsWithRef, useId, forwardRef, type Ref } from "react";
import { FieldError } from "react-hook-form";
import { cn } from "../../utils/cn";

type Props = {
    label : string;
    error? : FieldError;
} & ComponentPropsWithRef<'input'>;

export const Input = forwardRef(
    ({label, error, ...rest} : Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();

    return(
        <div className="my-2 flex flex-col max-w-52">
            <label htmlFor={id} className="my-1 text-sm mr-2 uppercase text-left text-gray-400 dark:text-gray-400">{label}</label>
            <input 
                id={id} 
                ref={ref}
                {...rest}
                className={cn(
                    'h-10 rounded px-3 outline-none',
                    {'text-red-300 border-2 border-red-300 ring-red-300 placeholder:text-red-300 focus:ring-500' : error}
                )}
                />
            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
        </div>
    );
});