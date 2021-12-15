import {
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
import { useForm } from 'react-hook-form'

interface EditItemsProps {
    title: string,
    description: string,
    rating: number,
    genre: number,
}

const EditItems = () => {

    const { register, formState: {errors, isSubmitting}, handleSubmit } = useForm<EditItemsProps>({
        mode: 'all',
    })

    const genreArray = [
        'Action','Comedy','Anime'
    ]

    return (
        <Stack>

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

            <FormControl id={'description'}>
                <FormLabel htmlFor={'description'}>Description</FormLabel>
                <Input placeholder={'Description'} />
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

            <FormControl id={'genre'} isRequired isInvalid={errors.genre ? true:false}>
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

        </Stack>
    )
}

export default EditItems