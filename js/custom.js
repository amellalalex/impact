$(document).ready(function()
{
  // Get the current year
  var date = new Date();
  var year = date.getFullYear();

  // Change the copyright year element
  $('#copyright_year').html(year);
});
