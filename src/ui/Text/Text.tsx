import { cn } from "../../utils/cn";

type Props = {
    children? : string | string[] | number;
    className? : string;
    styles? : string;
};

const Text = ({children = "none txt",className}: Props) => {
    return <p className={cn(
        "dark:text-slate-300 m-3 text-xl",
        className
    )}>{children}</p>
};

export default Text;