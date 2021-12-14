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

    const { register, formState: {errors}, handleSubmit, formState } = useForm<EditItemsProps>({
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
                    name={'title'}
                    placeholder={'Title'}
                    ref={register({required: "Title is required"})}
                />
                <FormErrorMessage>
                    {errors.title && errors.title.message}
                </FormErrorMessage>
            </FormControl>

            <FormControl id={'description'}>
                <FormLabel htmlFor={'description'}>Description</FormLabel>
                <Input placeholder={'Description'} />
            </FormControl>

            <FormControl id={'rating'}>
                <FormLabel htmlFor={'rating'}>Rating</FormLabel>
                <NumberInput max={5.0} min={0.0} step={0.5}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>

            <FormControl id={'genre'}>
                <FormLabel htmlFor={'genre'}>Genre</FormLabel>
                <Select placeholder={'---'}>
                    <option>Action</option>
                    <option>Comedy</option>
                    <option>Anime</option>
                </Select>
            </FormControl>

        </Stack>
    )
}

export default EditItems