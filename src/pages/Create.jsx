import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  formLabel: {
    color: 'rgba(0, 0, 0, 0.54)'
  }
});

export default function Create() {
  const classes = useStyles();
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8001/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setCategory(data[0].id)
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setDescriptionError(false);
    setPriceError(false);

    if (name === "") {
      setNameError(true);
    }
    if (description === "") {
      setDescriptionError(true);
    }
    if (price === null) {
      setPriceError(true);
    }
    if (name && description) {
      fetch("http://localhost:8000/products", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, description, price, category }),
      }).then(() => history.push("/"));
    }
  };

  return (
    <Container size="sm">
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        {"Create a New Product"}
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={nameError}
        />

        <TextField
          className={classes.field}
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={descriptionError}
        />

        <TextField
          className={classes.field}
          onChange={(e) => setPrice(e.target.value)}
          label="Price"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={priceError}
        />

        {/* <Radio value="hello" />
        <Radio value="goodbye" /> */}

        <FormControl className={classes.field}>
          <FormLabel className={classes.formLabel}> { 'Product Category' } </FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(parseInt(e.target.value))}>
            {categories.map((c) => (
              <FormControlLabel
                type="number"
                key={c.id}
                value={c.id}
                control={<Radio />}
                label={c.name}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}>
          Submit
        </Button>
      </form>
    </Container>
  );
}
