# ionic2-stars-valoration
A graphic star-list based evaluator.

# Inputs
- *valoration:* item evaluation (number). Default random.
- *starsNumber:* max stars number of the evaluator (number). Default 5.
- *starSize:* every star value (number). Default 20.
- *color:* the stars color (string). If is not an html color name (i.e. red, blue...) , it must have the '#' character. Default #ffaf1d.
- *fontSize:* as ionicons is a font, you can change it by its font-size property. Default: 25px (string).

# Examples

`
<stars-valoration></stars-valoration>
`


`
<stars-valoration [valoration]="37" color="red"></stars-valoration>
`


`
<stars-valoration [valoration]="670" [starsNumber]="10" [starSize]="100"></stars-valoration>
`
