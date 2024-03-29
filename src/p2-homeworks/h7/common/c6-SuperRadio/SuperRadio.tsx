import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
    value?: any
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value);
        }
    }


    const mappedOptions: any[] = options ? options.map((o, i) => {
        return (
            <label key={name + "-" + i}>
                <input
                    type={"radio"}
                    name={name}
                    checked={o === value}
                    value={o}
                    onChange={onChangeCallback}
                />
                {o}
            </label>)
    }) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
