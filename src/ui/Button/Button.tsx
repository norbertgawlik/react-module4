import { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Props = {
    label : string;
    className? : string;
} & ComponentProps<'button'>;

export const Button = ({label, className, ...rep} : Props) => {
    return(
        <button
            className={cn(
                "bg-blue-500 mt-2 mb-2 py-1.5 px-5 pytext-sm border transition ease-in hover:outline-none hover:opacity-85",
                className
            )}
            {...rep}>
                {label}
        </button>
    );
};