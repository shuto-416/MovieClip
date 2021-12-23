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
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import{ movie_types, movie_enum } from '../../types/movie_type'

const EditItems = () => {

    // react-hook-form
    const { register, formState: {errors, isSubmitting, isValid}, handleSubmit } = useForm<movie_types>({
        mode: 'all',  // 何も入力されていない場合、入力内容が正しくない場合、それぞれにおいてバリデーションが走る
    })
    const [data, setClips] = useState<movie_types>()

    const Action=1, Comedy=2, Anime=3

    const genreArray = [
        'Action',
        'Comedy',
        'Anime'
    ]

    const onSubmit = (data: movie_types) => {

        setClips(data)

        axios.post('http://localhost:5000/edit_movies', data).then((res: any) => {
            console.log(res)
        })
    }
    
    return (
        <Stack spacing={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
                id={'title'}
                isRequired
                isInvalid={errors.title ? true:false}  
            >
                <FormLabel htmlFor={'title'}>Title</FormLabel>
                <Input
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
                    {genreArray.map((genre) => (
                        <option>{genre}</option>
                    ))}
                </Select>
                <FormErrorMessage>
                    {errors.genre && errors.genre.message}
                </FormErrorMessage>
            </FormControl>

            <Stack spacing={10} pt={8}>
                <Button
                    bgGradient={'linear(to-r, red.500,pink.500)'}
                    color={'white'}
                    type={'submit'}     // onSubmit動かんかった理由こいつ
                    _hover={{ bgGradient: 'linear(to-r, red.400,pink.400)' }}
                    _active={{ bgGradient: 'linear(to-r, red.500,pink.500)' }}
                    _focus={{ boxShadow: 'none' }}
                    disabled={!isValid}     // 全てのバリデーションが通過すると自動的に解除
                    isLoading={isSubmitting}    // フォーム送信中にロード表示
                >
                    Create Clip
                </Button>
            </Stack>
            </form>
        </Stack>
    )
}

export default EditItems