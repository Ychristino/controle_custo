from behave import *
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select
import time

driver = webdriver.Chrome()

@given('Acessou o menu de cadastro de obra')
def step_impl(context):
    print('Acessando a tela de cadastro de obra')
    time.sleep(5)
    driver.get("file:///C:/Users/Yan/Documents/projetos/html_css_js/Gerenciamento%20de%20Custo/index.html")
    menu = driver.find_element(By.ID, 'nova_obra')
    menu.click()

@when('Preencho as informacoes da minha obra')
def step_impl(context):
    logradouro = driver.find_element(By.ID, 'logradouro')
    numero = driver.find_element(By.ID, 'numero')
    complemento = driver.find_element(By.ID, 'complemento')
    bairro = driver.find_element(By.ID, 'bairro')
    cidade = driver.find_element(By.ID, 'cidade')
    estado = Select(driver.find_element(By.ID, 'estado'))
    time.sleep(5)

    logradouro.send_keys("Rua da minha nova obra")
    numero.send_keys("2000")
    complemento.send_keys("")
    bairro.send_keys("Ricos")
    cidade.send_keys("Porto Alegre")
    estado.select_by_value("rs")
    print('Preenchi minhas inforamções')
    time.sleep(5)


@then('A tela de cadastro da obra e concluida')
def step_impl(context):
    time.sleep(5)
    concluir = driver.find_element(By.ID, 'nextBtn')
    concluir.click()
    print('Salvei o registro')
    driver.find_element(By.ID, 'nova_obra')
    print('Voltou para o menu')
    time.sleep(60)
