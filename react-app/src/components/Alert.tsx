import {ReactNode} from "react";


interface Props {
    children: ReactNode;
    onClose: ()=>void;

}
    const Alert =({children,onClose}: Props) => {


        return (
            <div className="alert alert-primary alert-dismissible" onClick={onClose}>
                {children}

            </div>);
    }

export default Alert
