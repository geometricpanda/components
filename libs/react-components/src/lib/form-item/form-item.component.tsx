import {ReactNode, useEffect, useState} from 'react';
import styles from './form-item.module.css';
import {generateUniqueId} from '../utils/generate-unique-id';

export interface FormItemRenderProps {
  id: string;
  'aria-describedby': string | undefined;
  'aria-invalid': true | undefined;
}

export type FormItemRender = (props: FormItemRenderProps) => ReactNode;

export interface FormItemProps {
  id?: string;
  label: ReactNode;
  errorId?: string;
  descriptionId?: string;
  error?: ReactNode;
  description?: ReactNode;
  render: FormItemRender;
}

export const FormItem = ({
  id: _id,
  label,
  errorId: _errorId,
  error,
  descriptionId: _descriptionId,
  description,
  render,
}: FormItemProps) => {

  const [id] = useState(_id || generateUniqueId('input'));
  const [errorId] = useState(_errorId || generateUniqueId('error'));
  const [descriptionId] = useState(_descriptionId || generateUniqueId('description'));

  const [ariaDescribedBy, setAriaDescribedBy] = useState<FormItemRenderProps['aria-describedby']>(undefined);
  const [ariaInvalid, setAriaInvalid] = useState<FormItemRenderProps['aria-invalid']>(undefined);

  useEffect(() => {

    setAriaInvalid(error ? true : undefined);

    if (!error && !description) {

      setAriaDescribedBy(undefined);
      return;
    }

    const ariaArray = [
      error ? errorId : null,
      description ? descriptionId : null,
    ]
      .filter(val => !!val)
      .join(' ');

    setAriaDescribedBy(ariaArray)

  }, [description, descriptionId, error, errorId])

  const renderProps: FormItemRenderProps = {
    id,
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid,
  }

  return (
    <div className={styles['g-form-item']}>
      <label htmlFor={id}>
        {label}
      </label>

      {description && (
        <div id={descriptionId}>
          {description}
        </div>
      )}

      <div>
        {render(renderProps)}
      </div>

      {error && (
        <div id={errorId}>
          {error}
        </div>
      )}
    </div>
  )

}
