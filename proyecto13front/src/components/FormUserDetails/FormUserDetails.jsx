import React, { useContext, useEffect, useState } from 'react'
import StyledFormUserDetails from './FormUserDetails.style'
import CustomDiv from '../CustomDiv/CustomDiv'
import Button from '../Button/Button'
import Label from '../Label/Label'
import { payMethod } from '../../constants/payMethod'
import { useForm } from 'react-hook-form'
import Paragraph from '../Paragraph/Paragraph'
import { getUserDetailsPurchase } from '../../api/userApi'
import { purchase } from '../../api/cartApi'
import { NumCartContext } from '../../provider/NumCartProvider'
import useCustomError from '../../customHooks/useCustomError'
import useCustomMsg from '../../customHooks/useCustomMsg'
import { useNavigate } from 'react-router-dom'

const FormUserDetails = () => {
  const { register, handleSubmit, formState, setValue } = useForm({
    defaultValues: {
      name: '',
      lastname: '',
      lastname2: '',
      telephone: '',
      street: '',
      number: '',
      floor: '',
      door: '',
      postalCode: '',
      city: '',
      province: '',
      pay: ''
    }
  })

  const [totalPrice, setTotalPrice] = useState()
  const { setNumCart } = useContext(NumCartContext)
  const { error, setError } = useCustomError()
  const { msg, setMsg } = useCustomMsg()
  let navigate = useNavigate()

  useEffect(() => {
    getuserDetails()
  }, [])

  const getuserDetails = async () => {
    const res = await getUserDetailsPurchase(localStorage.getItem('id'))
    setValue('name', res.user.name)
    setValue('lastname', res.user.lastName1)
    setValue('lastname2', res.user.lastName2)
    setValue('telephone', res.user.telephone)
    setValue('street', res.user.street)
    setValue('number', res.user.number)
    setValue('floor', res.user.floor)
    setValue('door', res.user.door)
    setValue('postalCode', res.user.postalCode)
    setValue('city', res.user.city)
    setValue('province', res.user.province)
    setTotalPrice(res.price)
  }

  const onSubmit = async (values) => {
    const res = await purchase(localStorage.getItem('id'), values)
    if (res.status === 200) {
      setMsg(res.msg)
      setNumCart(0)
      setTimeout(() => {
        navigate('/')
      }, 2000)
    } else {
      setError(res.msg)
    }
  }

  return (
    <StyledFormUserDetails onSubmit={handleSubmit(onSubmit)}>
      <CustomDiv w={'100%'}>
        <CustomDiv dir={'column'} w={'250px'} gap={'var(--rtc-gap-xs)'}>
          <Label>Nombre</Label>
          <input
            id='name'
            type='text'
            placeholder='Nombre'
            {...register('name', {
              required: {
                value: true,
                message: 'Obligatorio'
              }
            })}
          ></input>
          {formState.errors.name ? (
            <CustomDiv jc={'flex-start'} padding={'0 var(--rtc-padding-s)'}>
              <Paragraph
                color={'var(--rtc-color-error)'}
                fontweight={'bold'}
                textalign={'center'}
                textshadow={'var(--rtc-textShadow)'}
              >
                {formState.errors.name.message}
              </Paragraph>
            </CustomDiv>
          ) : null}
        </CustomDiv>
        <CustomDiv dir={'column'} w={'250px'} gap={'var(--rtc-gap-xs)'}>
          <Label>Primer apellido</Label>
          <input
            id='lastname'
            type='text'
            placeholder='Primer apellido'
            {...register('lastname', {
              required: {
                value: true,
                message: 'Obligatorio'
              }
            })}
          ></input>
          {formState.errors.lastname ? (
            <CustomDiv jc={'flex-start'} padding={'0 var(--rtc-padding-s)'}>
              <Paragraph
                color={'var(--rtc-color-error)'}
                fontweight={'bold'}
                textalign={'center'}
                textshadow={'var(--rtc-textShadow)'}
              >
                {formState.errors.lastname.message}
              </Paragraph>
            </CustomDiv>
          ) : null}
        </CustomDiv>{' '}
        <CustomDiv dir={'column'} w={'250px'} gap={'var(--rtc-gap-xs)'}>
          <Label>Segundo apellido</Label>
          <input
            id='lastname2'
            type='text'
            placeholder='Segunda apellido'
            {...register('lastname2')}
          ></input>
        </CustomDiv>
      </CustomDiv>
      <CustomDiv w={'100%'}>
        <CustomDiv dir={'column'} w={'380px'} gap={'var(--rtc-gap-xs)'}>
          <Label>Telefono</Label>
          <input
            id='telephone'
            type='text'
            placeholder='Telefono'
            {...register('telephone', {
              required: {
                value: true,
                message: 'Obligatorio'
              }
            })}
          ></input>
          {formState.errors.telephone ? (
            <CustomDiv jc={'flex-start'} padding={'0 var(--rtc-padding-s)'}>
              <Paragraph
                color={'var(--rtc-color-error)'}
                fontweight={'bold'}
                textalign={'center'}
                textshadow={'var(--rtc-textShadow)'}
              >
                {formState.errors.telephone.message}
              </Paragraph>
            </CustomDiv>
          ) : null}
        </CustomDiv>
        <CustomDiv dir={'column'} w={'380px'} gap={'var(--rtc-gap-xs)'}>
          <Label>Calle</Label>
          <input
            id='street'
            type='text'
            placeholder='Calle'
            {...register('street', {
              required: {
                value: true,
                message: 'Obligatorio'
              }
            })}
          ></input>
          {formState.errors.street ? (
            <CustomDiv jc={'flex-start'} padding={'0 var(--rtc-padding-s)'}>
              <Paragraph
                color={'var(--rtc-color-error)'}
                fontweight={'bold'}
                textalign={'center'}
                textshadow={'var(--rtc-textShadow)'}
              >
                {formState.errors.street.message}
              </Paragraph>
            </CustomDiv>
          ) : null}
        </CustomDiv>
      </CustomDiv>
      <CustomDiv w={'100%'}>
        <CustomDiv dir={'column'} w={'250px'} gap={'var(--rtc-gap-xs)'}>
          <Label>Numero</Label>
          <input
            id='number'
            type='text'
            placeholder='Numero'
            {...register('number', {
              required: {
                value: true,
                message: 'Obligatorio'
              }
            })}
          ></input>
          {formState.errors.number ? (
            <CustomDiv jc={'flex-start'} padding={'0 var(--rtc-padding-s)'}>
              <Paragraph
                color={'var(--rtc-color-error)'}
                fontweight={'bold'}
                textalign={'center'}
                textshadow={'var(--rtc-textShadow)'}
              >
                {formState.errors.number.message}
              </Paragraph>
            </CustomDiv>
          ) : null}
        </CustomDiv>
        <CustomDiv dir={'column'} w={'250px'} gap={'var(--rtc-gap-xs)'}>
          <Label>Planta</Label>
          <input
            id='floor'
            type='text'
            placeholder='Planta'
            {...register('floor')}
          ></input>
        </CustomDiv>
        <CustomDiv dir={'column'} w={'250px'} gap={'var(--rtc-gap-xs)'}>
          <Label>Puerta</Label>
          <input
            id='door'
            type='text'
            placeholder='Puerta'
            {...register('door')}
          ></input>
        </CustomDiv>
      </CustomDiv>
      <CustomDiv w={'100%'}>
        <CustomDiv dir={'column'} w={'250px'} gap={'var(--rtc-gap-xs)'}>
          <Label>Código Postal</Label>
          <input
            id='postalCode'
            type='text'
            placeholder='Código postal'
            {...register('postalCode', {
              required: {
                value: true,
                message: 'Obligatorio'
              }
            })}
          ></input>
          {formState.errors.postalCode ? (
            <CustomDiv jc={'flex-start'} padding={'0 var(--rtc-padding-s)'}>
              <Paragraph
                color={'var(--rtc-color-error)'}
                fontweight={'bold'}
                textalign={'center'}
                textshadow={'var(--rtc-textShadow)'}
              >
                {formState.errors.postalCode.message}
              </Paragraph>
            </CustomDiv>
          ) : null}
        </CustomDiv>
        <CustomDiv dir={'column'} w={'250px'} gap={'var(--rtc-gap-xs)'}>
          <Label>Ciudad</Label>
          <input
            id='city'
            type='text'
            placeholder='Ciudad'
            {...register('city', {
              required: {
                value: true,
                message: 'Obligatorio'
              }
            })}
          ></input>
          {formState.errors.city ? (
            <CustomDiv jc={'flex-start'} padding={'0 var(--rtc-padding-s)'}>
              <Paragraph
                color={'var(--rtc-color-error)'}
                fontweight={'bold'}
                textalign={'center'}
                textshadow={'var(--rtc-textShadow)'}
              >
                {formState.errors.city.message}
              </Paragraph>
            </CustomDiv>
          ) : null}
        </CustomDiv>
        <CustomDiv dir={'column'} w={'250px'} gap={'var(--rtc-gap-xs)'}>
          <Label>Provincia</Label>
          <input
            id='province'
            type='text'
            placeholder='Provincia'
            {...register('province', {
              required: {
                value: true,
                message: 'Obligatorio'
              }
            })}
          ></input>
          {formState.errors.province ? (
            <CustomDiv jc={'flex-start'} padding={'0 var(--rtc-padding-s)'}>
              <Paragraph
                color={'var(--rtc-color-error)'}
                fontweight={'bold'}
                textalign={'center'}
                textshadow={'var(--rtc-textShadow)'}
              >
                {formState.errors.province.message}
              </Paragraph>
            </CustomDiv>
          ) : null}
        </CustomDiv>
      </CustomDiv>
      <CustomDiv w={'100%'} ai={'flex-end'}>
        <CustomDiv dir={'column'} w={'300px'} gap={'var(--rtc-gap-xs)'}>
          <Label>Pago</Label>
          <select
            {...register('pay', {
              required: {
                value: true,
                message: 'Obligatorio'
              }
            })}
          >
            {payMethod.map((pay, index) => {
              return (
                <option key={index} value={pay.value}>
                  {pay.desc}
                </option>
              )
            })}
          </select>
          {formState.errors.pay ? (
            <CustomDiv jc={'flex-start'} padding={'0 var(--rtc-padding-s)'}>
              <Paragraph
                color={'var(--rtc-color-error)'}
                fontweight={'bold'}
                textalign={'center'}
                textshadow={'var(--rtc-textShadow)'}
              >
                {formState.errors.pay.message}
              </Paragraph>
            </CustomDiv>
          ) : null}
        </CustomDiv>
        <CustomDiv w={'300px'}>
          <Paragraph color={'var(--rtc-color-white)'} fontsize={'30px'}>
            Total: {totalPrice}€
          </Paragraph>
        </CustomDiv>
      </CustomDiv>
      <Button type={'submit'}>Comprar</Button>
      {error ? (
        <CustomDiv>
          <Paragraph
            color={'var(--rtc-color-error)'}
            fontweight={'bold'}
            textalign={'center'}
            textshadow={'var(--rtc-textShadow)'}
          >
            {error}
          </Paragraph>
        </CustomDiv>
      ) : null}
      {msg ? (
        <CustomDiv>
          <Paragraph
            color={'var(--rtc-color-white)'}
            fontweight={'bold'}
            textalign={'center'}
          >
            {msg}
          </Paragraph>
        </CustomDiv>
      ) : null}
    </StyledFormUserDetails>
  )
}

export default FormUserDetails
