# Movies App

A React Native that displays a list of movies fetched through a web API, and allows users to add their own.

[![Tests](https://github.com/a7med-mahmoud/movies-app/actions/workflows/test.yml/badge.svg)](https://github.com/a7med-mahmoud/movies-app/actions/workflows/test.yml)

# Running the App

Before running the app you must add the `API_KEY` environment variable in a `.env` file like so

```
API_KEY=my_api_key
```

# Decisions I made

## Performance

I tried to make the app as performant as possible by memoizing components that don't change very often so they don't re-render for no reason using `React.memo`, memoizing data that also doesn't have to be calculated on every re-render using `useMemo`, and memoizing the functions (callbacks) that should be memoized to not hurt performance.

## Nesting `FlatList`s inside `SectionList`

It may seem awkward nesting `FlatList`s inside a `SectionList`, but the reason I did so is to use the `numColumns` prop on `FlatList` which is not available on the `SectionList` component. You might think that this hurts the performance of the app, but it actually doesn't, according to the React Native contributers and experts, lists are built to be composed and that if you handle it correctly, it won't hurt the performance of the app.

I could've just used a `SectionList` and have all the one-in-a-row but I love the 2-column look (even if it's not a mandatory).

## Choosing `FastImage` over `Image`

I chose to use `react-native-fast-image` as it handles images more effeciently than `react-native`'s `Image` component especially on large lists of data like the "All Movies" list that loads the movies on scroll (Infinite scroll) and can get very large very quickly.
