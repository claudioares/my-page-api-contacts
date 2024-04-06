export function html_email (to:string) {
    return `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
    
        <header class="header_emaiil">
            <img src="https://lh3.googleusercontent.com/pw/AP1GczMrQZSCJNXjlI7IK5M198IYP2NKXtoIOy_NnSeNQFdoKqjAZfJoJ4Kyrlh6I2ch7QgLRLmlKQSpcrA7oQ0mXrOLXFN9at0Cz_rGkKLZ_EQDG3lzZlbN8A3nbrwA42pkPXlDM0MtzYn9Cmx9WKFt2lFPKP622k847nLOv-FOilt1Qb5iv_yqNqk1hHlwYBdnBl2ZlKfX2ashflWjOSAWoXrVzobLE3RjmJz-gMN0dwuf4UMQamoacKQbMWH4bM3-BSmaGnTPS14jtu4aPIp6oy3JiRGENan0VDO6WVPmBW0y3RY3iu2rbFkrkwWachz5o6AwaIERMNQiPrmPCbPkzAcsOsOEPgyoPyARZP4ukD3XkUj1Aoa9-kmxoQVOI6mzfEk_355csH3Yg_I6P5XWMImTwIZqdTwYZ0lk7r5eIbvSVZP-8t5s0tqboyodCJjMtMCj8IP7MnydwpDMjO4HJBZtq-7WScxGD1-10xNL15EzO4D5ZKZo1HE6QGoBmM_3XbifxTzZBxRzLMOI1O_orpexS7RRm-uO5JKSBBDwN8vU3KGuToEWmMRmqVCOxK5rAeszkkkmr1rAswoePr97oQYucI-jrXTp1DuUGp74DW-RUsV2MLF6bKEOMLWNMtC5kCoU4iqnOp_mC0eF6TubBM1NQATjZvqL-hSj6JPHL1FZ5DBVaJwPIPndnoWmIUO0CqiBbRIB3A_34RYiMKuF-lstYkxwup0GaOo6C4yfSRzhqmkm7hEFvkaZZzHcMfNWR_zDkUL5r-ExiSb9o_chHPq3zA3pY4FH4FLqEGYk9blto0YeGB3Aiel_l7UoRClQQZAh6TTm455zJyt9gEKFaTkmIR9Gwerivu0jfP5QCV-TeULj5anWp8_PTbXw3ErE4PymIBv6Z7XtIA1IvBhPGEgQXJAp8QJ6s7HHcoRmm0Nt0d_zhxaOegLqOP_HwiDMi_MO7lV0udxPCC2sF5i6XSwQRCg8HMcD=w222-h44-s-no-gm?authuser=1" alt="logo da empresa">
        </header>
        <h1>Obrigrado pelo seu contato</h1>
        <p>
            Olá ${to}, aquí é o Cláudio. Este é um email de resposta
            ao seu contato em minha pagina pessoal.
        </p>
        <p>
            Estou analizando sua menssagem e entrarei em contato, em até 
            48 horas, no email que você deixou para contato no formulário no site.
        </p>
        <p>
            Espero que possamos fazer uma boa parceria. &#128077;
        </p>
    
        <img class="img_ilustrator" src="https://lh3.googleusercontent.com/pw/AP1GczOIgd1zgqxROIFQUPN69vHBkPypMnlZiAKiJdaJWqsXIvVdyB5uj1cCdHweEhMNKTAghO4j4Jfn7EPjRitw5_2Th0RVXVcc3jzZNw9pAvnbgvKcK_fqB60wiUPnLpjC900AuMdmNCmszdpohXpoGYy7Up_1oSu9mjTkwFVjvxl2nB8nOZQLUU0eHh58MajMeaa0nE-jhZN1QA8rxigXA_LVRucCXoXSreFby1b3PMjveVm6NLrGtGeBvAI6nb3pllwdBgYuUxf7mfZMLVZ3zMWkw6nbN74bHrEWo7AUi9svC-Gg26zSb3erGsA_Ydj9LYXspyAB44SwuPSm0LS6VXUbvukDMS__qPkVQluHtvJsqjYAeE7EaL7RKncLQ8IhGvZ-sJ3-tYLzmD1EZ6dvP3NoiWUh-RE-MpYgedqK6kp2FNom-4fr4oDFdHLt1saP0i9UjVW4G3bdV0H0JpVXuKqBfgjCBBj2E3Q1l4v3iwa1IGKBFBzXlhNBpLVrjmD6J2jjgvKSu2wJnippY86WfJEFwRPD0gRmGC38XjVLv_joqfI3G5nPa8Qo2T-U7w4LH3M9qtRwXyEHeIoULhO7_2E14AcaEPcxL3lgDP8N00Ax4wOgaxgZNmTgUXzhwekeB2Vx03dCKAU9h9YPJkusOeF75HGj4-_0Xm1nQiqzlzAanN_EKeWJSvv4tPSFyiwVBRAOgcT26TfyMSpx6yndhumBfRIhqsJJQ2hhY07BrHvuPxKRJ2WuHF8hxX5EkHeRflrHyf7LUsLrFzWAgka7DFZnQCfqL5cYWODhI7R5RchqWl2DWRy8nY40Vzaz1PYI2BurKzKCVAqn--sfx7LvPnYibFz5Bqkp4I2M9RmSulGgUoMAPOFVr8EQ8l16xuEGnLFcsj0GtxyiwJqe86o2StlxD3rexEvcfKgKNRlAO9NYaIGCeOTRSk95ABzXIoc9bPUHC92SBS18ZIJ5MoTuc6xScLhySI4L=w456-h607-s-no-gm?authuser=1" alt="imagem ilustrativa">
    
        <div class="footer">
            <p>
                Atenciosamente:
            </p>
            <p>
                Cláudio J. A. Soares
            </p>
        </div>
        
    
    
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                text-align: center;
            }
            body{
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: 2rem;
    
                padding: 1rem;
            }
            .header_emaiil{
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: rgb(21, 20, 31);
                width: 100%;
                height: 10rem;
            }
            h1{
                font-size:2rem;
            }
            .img_ilustrator{
                width: 18rem;
            }
            .footer{
                display: flex;
                gap:0.3rem;
            }
            .footer :first-child{
                font-weight: bold;
            }
            .footer :last-child{
                font-style: oblique;
            }
        </style>
    </body>
    </html>`
}

