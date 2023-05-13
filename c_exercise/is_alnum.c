#include <stdio.h>

int is_alnum(char c)
{
    if (c >= '0' && c <= '9')
        return 1;
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))
        return 1;
    return 0;
}

int main(void)
{
    char c = 'a';

    if (is_alnum(c))
        printf("%c is alphanumeric \n", c);
    else
        printf("%c is not alphanumeric \n");

    return (0);
}