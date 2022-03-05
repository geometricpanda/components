import {Alert, AnchorButton, Button, FormItem, Input, Text, ThemeProvider} from '@geometricpanda/react-components';
import {useForm} from 'react-hook-form';
import {object, string} from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import styles from './app.module.css';
import {useCallback, useEffect, useRef} from 'react';

const schema = object({
  name: string()
    .required()
    .max(100)
    .label('Name'),

  favouriteColour: string()
    .required()
    .label('Favourite Colour'),
}).required();


type ThisForm = {
  name: string;
  favouriteColour: string;
}

export function App() {

  const focusRef = useRef<HTMLDivElement>(null)

  const {register, handleSubmit, formState: {errors, isValid, isSubmitted, submitCount}, setFocus} = useForm<ThisForm>({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    shouldFocusError: false,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ThisForm) => console.log(data);

  useEffect(() => {
    if (errors && Object.keys(errors).length) {
      focusRef.current?.focus();
    }

  }, [errors, submitCount])

  return (
    <ThemeProvider>


      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['form']}>
          {isSubmitted && !isValid && (
            <div ref={focusRef} tabIndex={-1}>
              <Alert
                title={`You have ${Object.keys(errors).length} ${Object.keys(errors).length === 1 ? 'error' : 'errors'}`}>
                <ul>
                  {errors.name && (
                    <li>
                      <AnchorButton onClick={() => setFocus('name')} type={'button'}>
                        {errors.name.message}
                      </AnchorButton>
                    </li>
                  )}
                  {errors.favouriteColour && (
                    <li>
                      <AnchorButton onClick={() => setFocus('favouriteColour')} type={'button'}>
                        {errors.favouriteColour.message}
                      </AnchorButton>
                    </li>
                  )}
                </ul>
              </Alert>
            </div>
          )}

          <FormItem label={<Text>Name</Text>}
                    description={<Text size={'sm'}>Whats your name?</Text>}
                    error={errors.name && <Text state={'error'}>{errors.name.message}</Text>}
                    render={(props) => (
                      <Input
                        {...register('name')}
                        {...props}/>
                    )}/>


          <FormItem label={<Text>Favourite Colour</Text>}
                    description={<Text size={'sm'}>As long as it isn't beige we're good</Text>}
                    error={errors.favouriteColour && <Text state={'error'}>{errors.favouriteColour.message}</Text>}
                    render={(props) => (
                      <Input
                        {...register('favouriteColour')}
                        {...props}/>
                    )}/>

          <div>
            <Button type={'submit'}>Submit</Button>
          </div>
        </div>
      </form>

    </ThemeProvider>
  );
}

export default App;
