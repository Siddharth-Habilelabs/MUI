import Button from './Button';
import TextField from './TextField';

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Button(theme),
    TextField(theme),
  );
}