import React, { useCallback, useMemo } from 'react';
import * as Yup from 'yup';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';

import type Movie from '../types/movie';
import FormTextField from './FormTextField';
import today from '../utils/today';
import Button from './Button';
import FormImageField from './FormImageField';
import FormDateField from './FormDateField';

interface AddMovieFormProps {
  onAdd: (values: Movie) => void;
}

type Values = Omit<Movie, 'id' | 'release_date'> & { release_date: Date };

const validationSchema = Yup.object({
  poster_path: Yup.string().label('Poster'),
  title: Yup.string().label('Title').min(2).max(100).required(),
  overview: Yup.string().label('Overview').min(5).max(1000).required(),
  release_date: Yup.date()
    .label('Release Date')
    .max(today(), "Release Date can't be in the future")
    .required(),
}).required();

const initialValues = {
  title: '',
  overview: '',
  poster_path: '',
} as Values;

const AddMovieForm: React.FC<AddMovieFormProps> = ({ onAdd }) => {
  const onSubmit = useCallback(
    (values: Values) => {
      onAdd({
        ...values,
        id: nanoid(),
        release_date: values.release_date.toDateString(),
        isLocal: true,
      });
    },
    [onAdd],
  );
  const maxReleaseDate = useMemo(() => today(), []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <>
          <FormImageField name="poster_path" />
          <FormTextField name="title" placeholder="Title" />
          <FormDateField
            name="release_date"
            placeholder="Release Date"
            max={maxReleaseDate}
          />
          <FormTextField
            style={styles.overviewField}
            name="overview"
            placeholder="Overview"
            multiline
          />

          <Button onPress={handleSubmit}>Add Movie</Button>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  overviewField: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});

export default AddMovieForm;
