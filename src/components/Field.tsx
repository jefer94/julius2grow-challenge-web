import { FormGroup, Label, Input } from 'reactstrap'

import { ReactElement } from 'react'
import { InputType } from 'reactstrap/lib/Input'

interface OnChangeProps {
  readonly target: {
    readonly value?: string
    readonly files?: FileList
  }
}

type FieldProps = {
  readonly type?: InputType
  readonly id: string
  readonly label: string
  readonly value?: number | string
  readonly onChange: (v: OnChangeProps) => void
  readonly placeholder?: string
  readonly autoComplete?: string
}

export default function Field({ id, type, label, value, onChange, placeholder, autoComplete }: FieldProps): ReactElement {
  return (
    <FormGroup>
      <style jsx>{`
        .input {
          border-left: 0;
          border-right: 0;
          border-top: 0;
          border-radius: 0;
          outline: 0;
        }

        .label {
          margin-bottom: 0;
          margin-top: 1rem;
        }
      `}</style>
      <Label
        className=".label"
        for={id}
      >
        {label}
      </Label>

      <Input
        className=".input"
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        type={type || 'text'}
        name={id}
        id={id}
        placeholder={placeholder}
      />
    </FormGroup>
  )
}
