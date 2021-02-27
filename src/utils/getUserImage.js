const getUserImage = (name) => `https://cdn-expa.aiesec.org/gis-img/missing_profile_${name
&& name.charAt(0).toLowerCase()}.svg`;

export default getUserImage;
