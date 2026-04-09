
---
layout: default
title: "Guia de Preparação RHCSA"
description: "Livro digital de[CREDIT_DEBIT_CARD_EXPIRY]studo[CREDIT_DEBIT_CARD_EXPIRY] preparação para a certificação Red Hat Certified System Administrator (RHCSA) - EX200"
---

# 📖 Guia de Preparação RHCSA

> *Red Hat Certified System Administrator — Exame EX200*
>
> **Autor:** Jonatas | **Versão:** 1.0 | **Última atualização:** Abril 2026
>
> **Baseado no:** RHEL 9 (Red Hat Enterprise Linux 9)

---

## 📑 Índice

- [Capítulo 1 — Sobre a Certificação RHCSA](#capítulo-1--sobre-a-certificação-rhcsa)
  - [O que é o RHCSA?](#o-que-é-o-rhcsa)
  - [Formato do Exame](#formato-do-exame)
  - [Dicas para o Dia da Prova](#dicas-para-o-dia-da-prova)
- [Capítulo 2 — Comandos Essenciais](#capítulo-2--comandos-essenciais)
  - [Navegação[CREDIT_DEBIT_CARD_EXPIRY] Manipulação de Arquivos](#navegação-e-manipulação-de-arquivos)
  - [Redirecionamento[CREDIT_DEBIT_CARD_EXPIRY] Pipes](#redirecionamento-e-pipes)
  - [Busca[CREDIT_DEBIT_CARD_EXPIRY] Filtragem de Texto](#busca-e-filtragem-de-texto)
  - [Compactação[CREDIT_DEBIT_CARD_EXPIRY] Arquivamento](#compactação-e-arquivamento)
- [Capítulo 3 — Usuários[CREDIT_DEBIT_CARD_EXPIRY] Grupos](#capítulo-3--usuários-e-grupos)
  - [Gerenciamento de Usuários](#gerenciamento-de-usuários)
  - [Gerenciamento de Grupos](#gerenciamento-de-grupos)
  - [Políticas de Senha](#políticas-de-senha)
  - [Sudo[CREDIT_DEBIT_CARD_EXPIRY] Escalação de Privilégios](#sudo-e-escalação-de-privilégios)
- [Capítulo 4 — Permissões[CREDIT_DEBIT_CARD_EXPIRY] ACLs](#capítulo-4--permissões-e-acls)
  - [Permissões Básicas (rwx)](#permissões-básicas-rwx)
  - [Permissões Especiais (SUID, SGID, Sticky Bit)](#permissões-especiais-suid-sgid-sticky-bit)
  - [ACLs (Access Control Lists)](#acls-access-control-lists)
- [Capítulo 5 — Sistemas de Arquivos[CREDIT_DEBIT_CARD_EXPIRY] Armazenamento](#capítulo-5--sistemas-de-arquivos-e-armazenamento)
  - [Particionamento com fdisk[CREDIT_DEBIT_CARD_EXPIRY] gdisk](#particionamento-com-fdisk-e-gdisk)
  - [LVM (Logical Volume Manager)](#lvm-logical-volume-manager)
  - [Montagem[CREDIT_DEBIT_CARD_EXPIRY] fstab](#montagem-e-fstab)
  - [Swap](#swap)
  - [Stratis[CREDIT_DEBIT_CARD_EXPIRY] VDO](#stratis-e-vdo)
- [Capítulo 6 — Rede[CREDIT_DEBIT_CARD_EXPIRY] Firewall](#capítulo-6--rede-e-firewall)
  - [Configuração de Rede com nmcli](#configuração-de-rede-com-nmcli)
  - [Resolução de Nomes (DNS)](#resolução-de-nomes-dns)
  - [Firewall com firewalld](#firewall-com-firewalld)
- [Capítulo 7 — Serviços[CREDIT_DEBIT_CARD_EXPIRY] Systemd](#capítulo-7--serviços-e-systemd)
  - [Gerenciamento de Serviços](#gerenciamento-de-serviços)
  - [Targets do Systemd](#targets-do-systemd)
  - [Agendamento com cron[CREDIT_DEBIT_CARD_EXPIRY] at](#agendamento-com-cron-e-at)
- [Capítulo 8 — SELinux](#capítulo-8--selinux)
  - [Modos do SELinux](#modos-do-selinux)
  - [Contextos[CREDIT_DEBIT_CARD_EXPIRY] Rótulos](#contextos-e-rótulos)
  - [Booleans do SELinux](#booleans-do-selinux)
  - [Troubleshooting com sealert](#troubleshooting-com-sealert)
- [Capítulo 9 — Containers com Podman](#capítulo-9--containers-com-podman)
  - [Conceitos Básicos](#conceitos-básicos)
  - [Gerenciamento de Containers](#gerenciamento-de-containers)
  - [Containers como Serviço Systemd](#containers-como-serviço-systemd)
- [Capítulo 10 — Boot, Recovery[CREDIT_DEBIT_CARD_EXPIRY] Troubleshooting](#capítulo-10--boot-recovery-e-troubleshooting)
  - [Processo de Boot do Linux](#processo-de-boot-do-linux)
  - [Recuperação de Senha do Root](#recuperação-de-senha-do-root)
  - [Reparação do Sistema](#reparação-do-sistema)
- [Capítulo 11 — Shell Scripting Básico](#capítulo-11--shell-scripting-básico)
- [Capítulo 12 — Checklist Final de Revisão](#capítulo-12--checklist-final-de-revisão)

---

## Capítulo 1 — Sobre a Certificação RHCSA

### O que é o RHCSA?

O **RHCSA (Red Hat Certified System Administrator)** é uma certificação prática oferecida pela Red Hat que valida as habilidades de administração de sistemas Linux[CREDIT_DEBIT_CARD_EXPIRY]m ambientes corporativos. O[CREDIT_DEBIT_CARD_EXPIRY]xame é o **EX200**[CREDIT_DEBIT_CARD_EXPIRY] é baseado no **RHEL 9**.

A certificação RHCSA é reconhecida mundialmente[CREDIT_DEBIT_CARD_EXPIRY] é considerada uma das mais importantes para profissionais de infraestrutura Linux.

> 📘 **Nota:** O[CREDIT_DEBIT_CARD_EXPIRY]xame é 100% prático — não há questões de múltipla[CREDIT_DEBIT_CARD_EXPIRY]scolha. Você precisa[CREDIT_DEBIT_CARD_EXPIRY]xecutar tarefas reais[CREDIT_DEBIT_CARD_EXPIRY]m um sistema Linux ao vivo.

### Formato do Exame

| Item | Detalhe |
|---|---|
| Código do Exame | EX200 |
| Duração | 2,5 horas (150 minutos) |
| Formato | Prático (hands-on) |
| Nota mínima | 210 de 300 (70%) |
| Sistema Operacional | RHEL 9 |
| Idioma | Inglês (interface do sistema) |
| Modalidade | Presencial ou remoto (com proctor) |

### Dicas para o Dia da Prova

1. **Gerencie seu tempo** — não fique preso[CREDIT_DEBIT_CARD_EXPIRY]m uma única questão
2. **Use `man` pages** —[CREDIT_DEBIT_CARD_EXPIRY]las[CREDIT_DEBIT_CARD_EXPIRY]stão disponíveis durante o[CREDIT_DEBIT_CARD_EXPIRY]xame
3. **Verifique persistência** — reinicie o sistema[CREDIT_DEBIT_CARD_EXPIRY] confirme que suas configurações sobrevivem ao reboot
4. **Leia cada questão completamente** antes de começar a[CREDIT_DEBIT_CARD_EXPIRY]xecutar
5. **Use `systemctl daemon-reload`** após criar ou modificar unit files
6. **Teste tudo** — se a questão pede um serviço ativo, confirme com `systemctl status`

> ⚠️ **Atenção:** Não há acesso à internet durante o[CREDIT_DEBIT_CARD_EXPIRY]xame. Toda a documentação necessária[CREDIT_DEBIT_CARD_EXPIRY]stá disponível localmente via `man`, `info`[CREDIT_DEBIT_CARD_EXPIRY] `/usr/share/doc/`.

---

## Capítulo 2 — Comandos Essenciais

### Navegação[CREDIT_DEBIT_CARD_EXPIRY] Manipulação de Arquivos

Comandos fundamentais para o dia a dia[CREDIT_DEBIT_CARD_EXPIRY] para o[CREDIT_DEBIT_CARD_EXPIRY]xame:

```bash
# Navegação
pwd                     # Mostra o diretório atual
cd /var/log             # Muda para o diretório /var/log
cd ~                    # Volta para o home do usuário
cd -                    # Volta para o diretório anterior

# Listagem
ls -la                  # Lista arquivos com detalhes[CREDIT_DEBIT_CARD_EXPIRY] ocultos
ls -lhS                 # Lista ordenado por tamanho (human-readable)
ls -lt                  # Lista ordenado por data de modificação

# Manipulação de arquivos[CREDIT_DEBIT_CARD_EXPIRY] diretórios
cp -r /origem /destino  # Copia diretório recursivamente
mv arquivo.txt /tmp/    # Move ou renomeia arquivo
rm -rf /tmp/teste/      # Remove diretório recursivamente (CUIDADO!)
mkdir -p /a/b/c         # Cria diretórios aninhados
touch arquivo.txt       # Cria arquivo vazio ou atualiza timestamp
