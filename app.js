.destination:hover h2 {
    transform: rotate(0deg);
}

Add transition: transform 0.5s; to the h2 ruleset, so it should now be:

h2 {
    margin: 0;
    transform: rotate(-45deg);
    transition: transform 0.5s;
    text-shadow: 0 0 5px #01579b;
}
