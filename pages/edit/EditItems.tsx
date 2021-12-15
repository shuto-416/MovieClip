import {
    Button,
    Stack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
import * as React from "react"
import { useForm, useFormState } from 'react-hook-form'

interface EditItemsProps {
    title: string,
    description: string,
    rating: number,
    genre: number,
}

const EditItems = () => {

    const { register, formState: {errors, isSubmitting, isValid}, handleSubmit } = useForm<EditItemsProps>({
        mode: 'all',  // 何も入力されていない場合、入力内容が正しくない場合、それぞれにおいてバリデーションが走る
    })

    const genreArray = [
        'Action','Comedy','Anime'
    ]

    // Receives an element of type EditItemProps from the input and displays it on the console .
    const onSubmit = (data: EditItemsProps) => {
        console.log(data)
    }
    
    return (
        <Stack spacing={4}>

            <FormControl
                id={'title'}
                isRequired
                isInvalid={errors.title ? true:false}  
            >
                <FormLabel htmlFor={'title'}>Title</FormLabel>
                <Input
                    // name={'title'}
                    placeholder={'Title'}
                    {...register('title', { required: 'Title of the movie is required.'})}
                />
                <FormErrorMessage>
                    {errors.title && errors.title.message}
                </FormErrorMessage>
            </FormControl>

            <FormControl
                id={'description'}
                isRequired
                isInvalid={errors.description ? true:false}
            >
                <FormLabel htmlFor={'description'}>Description</FormLabel>
                <Input
                    placeholder={'Description'}
                    {...register('description', { required: 'Description of the movie is required.'})}
                />
                <FormErrorMessage>
                    {errors.description && errors.description.message}
                </FormErrorMessage>
            </FormControl>

            <FormControl
                id={'rating'}
                isRequired
                isInvalid={errors.rating ? true:false}
            >
                <FormLabel htmlFor={'rating'}>Rating</FormLabel>
                <NumberInput 
                    max={5.0}
                    min={0.0}
                    step={0.5}
                >
                    <NumberInputField {...register('rating', { required: 'Rating is required.'})}/>
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage>
                    {errors.rating && errors.rating.message}
                </FormErrorMessage>
            </FormControl>

            <FormControl
                id={'genre'}
                isRequired
                isInvalid={errors.genre ? true:false}
            >
                <FormLabel htmlFor={'genre'}>Genre</FormLabel>
                <Select placeholder={'---'} {...register('genre',{required: 'Genre of the movie is reuired.'})}>
                    <option>Action</option>
                    <option>Comedy</option>
                    <option>Anime</option>
                </Select>
                <FormErrorMessage>
                    {errors.genre && errors.genre.message}
                </FormErrorMessage>
            </FormControl>

            <Stack spacing={10}>
                <Button
                    bgGradient={'linear(to-r, red.500,pink.500)'}
                    color={'white'}
                    _hover={{ bgGradient: 'linear(to-r, red.400,pink.400)' }}
                    _active={{ bgGradient: 'linear(to-r, red.400,pink.400)' }}
                    _focus={{ boxShadow: 'none' }}
                    disabled={!isValid}     // 全てのバリデーションが通過すると自動的に解除
                    isLoading={isSubmitting}    // フォーム送信中にロード表示
                >
                    Create Clip
                </Button>
            </Stack>
        </Stack>
    )
}

export default EditItems