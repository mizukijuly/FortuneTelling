#! C:\xampp\perl
use strict;
use warnings;
use CGI;

# Create a new CGI object
my $cgi = CGI->new;

# Print the HTTP header and the start of the HTML document
print $cgi->header,
      $cgi->start_html('Greeting Page');

# Print a simple greeting message
print $cgi->h1('Hello, welcome to our site!'),
      $cgi->p('This is a dynamically generated page using CGI.');

# End the HTML document
print $cgi->end_html;