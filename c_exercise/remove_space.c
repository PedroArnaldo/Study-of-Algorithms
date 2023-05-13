#include <stdio.h>
#include <string.h>

void remove_space(char *str);

int main(void)
{
	char string[] = "A string with space in it";

	printf("Before: %s\n", string);
	remove_space(string);
	printf("After: %s\n", string);
	return 0;
}

void remove_space(char *str)
{
	int length = strlen(str);

	int j = 0;
	for (int i = 0; i <= length; i++)
	{
		if (str[i] != ' ')
		{
			str[j] = str[i];
			j++;
		}
	}
}
