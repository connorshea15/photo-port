import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '../'

const currentPhoto = { name: "portraits", description: "Portraits of people in my life" };

const mockToggleModal = jest.fn();