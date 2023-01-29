// WAP using nested swith case which covers the following opertors with expression

#include<stdio.h>
void main()
{
    printf("1.Arithmetic Operators\n2.Logical Operators\n3.Relational Operator\n\t\t(Choice=1)\n");

        int choice;
        int a,b,c;
        int aChoice;
        int lchoice;
      

        printf("\nEnter Your Choice:\t");
        scanf("%d",&choice);

        switch(choice)
        {
            case 1:

            printf("1.Addition\n2.Substraction\n3.Multiplication\n4.Division\nVALUES of a And b are 10 and 3 Respectively\n");

            printf("\nEnter Your Choice:\t");
            scanf("%d",&aChoice);

            printf("\nEnter Two Numbers:\t");
            scanf("%d%d",&a,&b);

            switch(aChoice)
            {
                case 1:
                c=a+b;
                printf("\nAdditon of a and b is %d",c);
                break;
                case 2:
                c=a-b;
                printf("\nSubstraction of a and b is %d",c);
                break;
                case 3:
                c=a*b;
                printf("\nMultiplication of a and b is %d",c);
                break;
                case 4:
                c=a/b;
                printf("\nDivision of a and b is %d",c);
                break;

                default:
                printf("\nPlease enter valid choice");
                break;
            }
            break;

            case 2:

            printf("\n1.Logical AND\n2.Logical OR\n3.Not Operator");
            printf("\nEnter Your Choice:\t");
            scanf("%d",&lchoice);

            switch(lchoice)
            {
                int Age;
                int salary;
                int age;
                
               
                case 1:
                printf("\nEnter Your Age:\t");
                scanf("%d",&Age);

                printf("\n(AGE=%d)\nYou are eligible for this job\n",Age);
                break;

                case 2:
                printf("\nEnter Your Salary:\t");
                scanf("%d",&salary);

                if(salary<5000 || salary>2000)
                printf("\n(Salary=%d)\nThe job is Affordable\n",salary);
                break;

                case 3:
                
                printf("\nEnter Your Age:\t");
                scanf("%d",&age);
                
                if(age!=18 || age>18)
                printf("(Age=%d)\nYou are eligible for vote\n",age);
                break;

                default:
                printf("Invalid Choice");
            }
            break;
        }
    }

